import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import stylesDefault from '../../../assets/styles/stylesDefault'
import { Body, Title } from '../../../components/ui/typography'
import { Icon } from '../../../components'
import { NAME_ICONS } from '../../../helpers/images'

const ContentInfo = ({
  uf,
  state,
  cases,
  deaths,
  suspects,
  refuses,
  datetime,
  image,
}) => {
  return (
    <View style={[stylesDefault.COL]}>
      <View style={[stylesDefault.ROW, styles.header]}>
        <Title>{state} - {uf}</Title>
        <Image style={styles.flag} source={image} />
      </View>
      <View style={[stylesDefault.ROW, styles.item]}>
        <Icon name={NAME_ICONS.family} size="small" />
        <Title>  {cases}</Title>
        <Body>  total de casos</Body>
      </View>
      <View style={[stylesDefault.ROW, styles.item]}>
        <Icon name={NAME_ICONS.death}  size="small" />
        <Title>  {deaths}</Title>
        <Body>  mortes</Body>
      </View>
      <View style={[stylesDefault.ROW, styles.item]}>
        <Icon name={NAME_ICONS.suspect} size="small" />
        <Title>  {suspects}</Title>
        <Body>  casos suspeitos</Body>
      </View>
      <View style={[stylesDefault.ROW, styles.item]}>
        <Icon name={NAME_ICONS.recovered} size="small"/>
        <Title>  {refuses}</Title>
        <Body>  recuperados</Body>
      </View>
      <View style={[stylesDefault.ROW, styles.item]}>
        <Icon name={NAME_ICONS.update} size="small"/>
        <Body>   {datetime} última atualização</Body>
      </View>
    </View>
  )
}

export default ContentInfo

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
  },
  header: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  flag: {
    width: 60,
    height: 45,
  },
})
