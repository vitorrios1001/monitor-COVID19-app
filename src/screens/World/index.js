import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  View,
  FlatList,
} from 'react-native'
import { useSelector } from 'react-redux'

import Loader from '../../components/Loader'
import { Title, Body } from '../../components/ui/typography'
import { Card, Icon } from '../../components'

import { getAllCountries } from '../../services/countriesService'

import stylesDefault from '../../assets/styles/stylesDefault'

import { NAME_ICONS } from '../../helpers/images'

const perPage = 7

const World = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [refreshing, setRefresh] = useState(false)
  
  const countries = useSelector(state => state.countries.data)
  
  const loadData = async (onRefresh = false) => {
    if (onRefresh) {
      setRefresh(true)
    } else {
      setLoading(true)
    }

    await getAllCountries(onRefresh)

    setList(countries.slice(0, perPage))

    if (onRefresh) {
      setRefresh(false)
    } else {
      setLoading(false)
    }
  }



  const loadMore = () => {
    setLoadingMore(true)
    const more = countries.slice(list.length, list.length + 7)

    setList([...list, ...more])
    setLoadingMore(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const renderCard = ({ item }) => (
    <Card style={[stylesDefault.COL,styles.card]}>
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
  )
    
  const renderFooter = () => {
    if (!loadingMore) return null;

    return <ActivityIndicator size="large" />
  }

  return (
    <SafeAreaView>
      {
        loading
          ? <Loader text="Carregando países aguarde..." /> 
          : <FlatList
              data={list}
              keyExtractor={item => item.country}
              renderItem={renderCard}
              onEndReachedThreshold={0.3}
              ListFooterComponent={renderFooter}
              onEndReached={loadMore}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => loadData(true)} />}
            />
      }
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
