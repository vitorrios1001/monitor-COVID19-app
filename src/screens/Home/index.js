import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import { Title } from '../../components/ui/typography'
import { Card, Icon } from '../../components'

import { MENU } from '../../constants/menu'

import stylesDefault from '../../assets/styles/stylesDefault'

const Home = ({ navigation }) => {
  const toggleMenu = (screen) => navigation.navigate(screen)

  const renderMenuItems = () => (
    MENU.map((item, idx) => (
      <Card
        key={idx}
        style={[stylesDefault.ROW,styles.card]}
        onPress={() => toggleMenu(item.key)}
      >
        <Icon name={item.nameIcon} size="big" />
        <Title style={styles.title}>
          {item.description}
        </Title>
      </Card>
    ))
  )

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
      >
        {renderMenuItems()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    backgroundColor: 'transparent'
  },
  title: {
    fontWeight: 'bold'
  },
  card: {
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
