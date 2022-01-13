import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo_container}>
            <Image source={require('./src/img/Без_имени_1.png')} style={styles.logo}/>
            <Text style={styles.logo_text}>Mohnatka</Text>
          </View>
        </View>
        <View style={styles.settings}>
          <View style={styles.settings1}>
            <Text style={styles.settings1_title}>Lorem Ipsum</Text>
            <View style={styles.settings1_properties}>
              <View style={styles.settings1_properties_titles}>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
              </View>
              <View style={styles.settings1_properties_titles_properties}>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.settings2}>
            <Text style={styles.settings1_title}>Lorem Ipsum</Text>
            <View style={styles.settings1_properties}>
              <View style={styles.settings1_properties_titles}>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
              </View>
              <View style={styles.settings1_properties_titles_properties}>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
              </View>
            </View>
            <View style={styles.settings1_properties}>
              <View style={styles.settings1_properties_titles}>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
              </View>
              <View style={styles.settings1_properties_titles_properties}>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
              </View>
            </View>
            <View style={styles.settings1_properties}>
              <View style={styles.settings1_properties_titles}>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
              </View>
              <View style={styles.settings1_properties_titles_properties}>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.settings3}>
            <Text style={styles.settings1_title}>Lorem Ipsum</Text>
            <View style={styles.settings3_properties}>
              <View style={styles.settings3_properties_titles}>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
                <Text style={styles.settings1_properties_titles_text}>Lorem Ipsum</Text>
              </View>
              <View style={styles.settings3_properties_titles_properties}>
                <Text style={styles.settings1_properties_titles_properties_text}>Default</Text>
                <View style={styles.settings1_properties_titles_properties_images}>
                  <Image source={require('./src/img/Rectangle_15.png')} style={styles.settings1_properties_titles_properties_rect} />
                  <Image source={require('./src/img/Group_1.png')} style={styles.settings1_properties_titles_properties_circle} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footer_staright}></View>
          <View style={styles.footer_icon_area}>
            <Image source={require('./src/img/Search_Footer.png')} style={styles.search_icon_footer} />
            <View style={styles.straight_footer} />
            <Image source={require('./src/img/Document.png')} style={styles.document_icon_footer} />
            <View style={styles.straight_footer} />
            <Image source={require('./src/img/Setting.png')} style={styles.settings_icon_footer} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#30D5C8',
  },
  header: {
    width: '100%',
    height: 117,
    backgroundColor: 'white',
    opacity: 0.65,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
  logo_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  logo: {
    width: 74,
    height: 74,
  },
  logo_text: {
    color: '#1D736A',
    width: 101,
    height: 24,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -20,
    textAlign: 'center',
  },
  settings: {
    display: 'flex',
    width: '100%',
    height: 634,
    marginTop: 18,
    justifyContent: 'space-between',
  },
  settings1: {
    display: 'flex',
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D736A',
    opacity: 0.8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  settings1_title: {
    width: '100%',
    height: 14,
    fontSize: 12,
    lineHeight: 14,
    color: '#84FFF0',
    marginLeft: 12,
  },
  settings1_properties: {
    display: 'flex',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settings1_properties_titles: {
    display: 'flex',
    width: 194,
    height: 100,
    justifyContent: 'space-around',
    marginLeft: 12,
  },
  settings1_properties_titles_text: {
    width: 98,
    height: 19,
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
  },
  settings1_properties_titles_properties: {
    display: 'flex',
    width: 194,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  settings1_properties_titles_properties_text: {
    color: '#84FFF0',
    width: 48,
    height: 17,
    fontSize: 14,
    lineHeight: 17,
  },
  settings1_properties_titles_properties_images: {
    width: 30,
    height: 18,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  settings1_properties_titles_properties_rect: {
    width: 24,
    height: 12,
  },
  settings1_properties_titles_properties_circle: {
    width: 18,
    height: 18,
    position: 'absolute',
    marginLeft: 12,
    zIndex: 20,
  },
  settings2: {
    display: 'flex',
    width: '100%',
    height: 368,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D736A',
    opacity: 0.8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  settings3: {
    display: 'flex',
    width: '100%',
    height: 92,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D736A',
    opacity: 0.8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  settings3_properties_titles_properties: {
    display: 'flex',
    width: 194,
    height: 63,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  settings3_properties_titles: {
    display: 'flex',
    width: 194,
    height: 63,
    justifyContent: 'space-around',
    marginLeft: 12,
  },
  settings3_properties: {
    display: 'flex',
    width: '100%',
    height: 63,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 190,
  },
  footer_staright: {
    width: 366,
    height: 2,
    backgroundColor: '#1D736A',
  },
  footer_icon_area: {
    width: 308,
    height: 49,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
  },
  search_icon_footer: {
    width: 43,
    height: 43,
  },
  straight_footer: {
    width: 2,
    height: 30,
    backgroundColor: '#1D736A',
  },
  document_icon_footer: {
    width: 47,
    height: 47,
  },
  settings_icon_footer: {
    width: 47,
    height: 47,
  }
});
