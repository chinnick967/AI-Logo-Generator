import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Picker } from '@react-native-picker/picker';

export default function EditScreenInfo({ path }: { path: string }) {

  const [company, setCompany] = useState('Healthcare');

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>

        <TextInput 
          style={styles.textinput}
          placeholder="Company Name"
        />
        <Text>
          <Text>Industry: </Text>
          <Picker
            style={styles.picker}
            selectedValue={company}
            onValueChange={currentCurrency => setCompany(currentCurrency)}>
            <Picker.Item style={styles.pickerItem} label="Healthcare" value="Healthcare" />
            <Picker.Item style={styles.pickerItem} label="Engineering" value="Engineering" />
            <Picker.Item style={styles.pickerItem} label="Marketing" value="Marketing" />
            <Picker.Item style={styles.pickerItem} label="Sales" value="Sales" />
            <Picker.Item style={styles.pickerItem} label="Business Development" value="Business Development" />
          </Picker>
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: 180,
    borderWidth: 1,
    borderColor: '#000000',
  },
  picker: {
    width: 150,
    fontSize: 20,
    color: '#000000'
  },
  pickerItem: {
    fontSize: 16,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
