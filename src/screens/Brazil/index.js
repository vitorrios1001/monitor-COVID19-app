import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
  Image,
  Dimensions,
} from 'react-native'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'

import { Title, Body } from '../../components/ui/typography'
import { Card } from '../../components'

import stylesDefault from '../../assets/styles/stylesDefault'
import Modal from '../../components/Modal'
import ContentInfo from './ContentInfo'
import { getAllStates } from '../../services/statesService'

const WIDTH = Dimensions.get('window').width

const Brazil = () => {
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefresh] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [stateSelected, setStateSelected] = useState({})
  
  const states  = useSelector(state => state.states.data)

  const loadData = async (onRefresh = false) => {
    if (onRefresh) {
      setRefresh(true)
    } else {
      setLoading(true)
    }

    await getAllStates(onRefresh)

    if (onRefresh) {
      setRefresh(false)
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const toggleCard = (item) => {
    setStateSelected(item)
    setOpenModal(true)
  }

  const renderCards = () => (
    states.map((item, idx) => (
      <Card
        key={idx}
        style={[stylesDefault.COL,styles.card]}
        onPress={() => toggleCard(item)}
      >
        <View style={[stylesDefault.ROW]}>
          <View>
            <Image
              style={styles.flagImage}
              source={item.image}
            />
          </View>
          <View style={[stylesDefault.COL, styles.content]}>
            <View style={[stylesDefault.ROW, styles.item]}>
              <Title>
                {item.state}
              </Title>
            </View>
            <View style={[stylesDefault.ROW, styles.item]}>
              <Body style={styles.label}>
                Casos:
              </Body>
              <Title>
                {item.cases}
              </Title>
            </View>
            <View style={[stylesDefault.ROW, styles.item]}>
              <Body style={styles.label}>
                Mortes:
              </Body>
              <Title>
                {item.deaths}
              </Title>
            </View>
          </View>
        </View>
      </Card>
    ))
  )

  return (
    <>
      <SafeAreaView style={styles.containerScreen} >
        <ScrollView
          style={styles.containerList}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => loadData(true)} />}
        >
          {loading ? <Loader text="Carregando estados aguarde..." size={60} /> : renderCards()}
        </ScrollView>
      </SafeAreaView>
      <Modal onClose={() => setOpenModal(false)} open={openModal}>
        <ContentInfo {...stateSelected} />
      </Modal>
    </>
  )
}

export default Brazil

const styles = StyleSheet.create({
  containerScreen: {
    width: WIDTH,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    marginHorizontal: 16,
  },
  containerList: {
    paddingHorizontal: 8,
  },
  card: {
    marginVertical: 8,
  },
  content: {
    justifyContent: 'space-around',
  },
  flagImage: {
    width: 150,
    height: 100,
    margin: 8,
    resizeMode: 'cover'
  }
})
