import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);



  const onChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
      console.log('Selected date:', date);
    }
  };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  
      <Text style={{ fontSize: 45, textAlign: 'center', color: 'darkblue'}}>Calendar Picker</Text>
     
      <Text style={{ marginVertical: 20, fontSize: 18}}>Date choosed: {selectedDate.toDateString()}</Text>
      


      <Text
        style={{
          backgroundColor: 'darkblue',
          color: 'white',
          padding: 20,
          borderRadius: 10,
          marginVertical: 10,
        }}
        onPress={() => setShowPicker(true)}
      >
        Choose Date
      </Text>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
       
};


export default App;

