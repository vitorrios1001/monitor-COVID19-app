import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native'
import { useSelector } from 'react-redux'

import Loader from '../../components/Loader'
import { Title, Body } from '../../components/ui/typography'
import { Card, Icon } from '../../components'

import { getAllCountries } from '../../services/countriesService'

import stylesDefault from '../../assets/styles/stylesDefault'

import { NAME_ICONS } from '../../helpers/images'

const World = () => {
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefresh] = useState(false)
  
  const countries = useSelector(state => state.countries.data)
  
  const loadData = async (onRefresh = false) => {
    if (onRefresh) {
      setRefresh(true)
    } else {
      setLoading(true)
    }

    await getAllCountries(onRefresh)

    if (onRefresh) {
      setRefresh(false)
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const renderCards = () => (
    countries.map((item, idx) => (
      <Card key={idx} style={[stylesDefault.COL,styles.card]}>
        <View style={[stylesDefault.ROW, styles.rowAlign]}>
          <Icon name={NAME_ICONS.world} size="small" />
          <Title style={[styles.value]}>
            {item.country}
          </Title>
        </View>
        <View style={[stylesDefault.COL]}>
          <View style={[stylesDefault.ROW, styles.rowAlign]}>
            <Body>
              Casos:
            </Body>
            <Title style={[styles.value]}>
              {item.cases}
            </Title>
          </View>
          <View style={[stylesDefault.ROW, styles.rowAlign]}>
            <Body>
              Confirmados:
            </Body>
            <Title style={[styles.value]}>
              {item.confirmed}
            </Title>
          </View>
          <View style={[stylesDefault.ROW, styles.rowAlign]}>
            <Body>
              Mortes:
            </Body>
            <Title style={[styles.value]}>
              {item.deaths}
            </Title>
          </View>
          <View style={[stylesDefault.ROW, styles.rowAlign]}>
            <Body>
              Recuperados:
            </Body>
            <Title style={[styles.value]}>
              {item.recovered}
            </Title>
          </View>
        </View>
      </Card>
    ))
  )

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => loadData(true)} />}
      >
        {loading ? <Loader text="Carregando países aguarde..." /> : renderCards()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default World

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    backgroundColor: 'transparent'
  },
  card: {
    marginVertical: 8,
  },
  rowAlign: {
    alignItems: 'center',
  },
  value: {
    marginLeft: 8,
  }
})
