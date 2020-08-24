import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cita from './components/Cita';
import NewCita from "./components/NewCita"

const App = () => {

  const [citas, setCitas] = useState([
    {
      id: '1',
      paciente: 'Jhosep Guadalupe',
      doctor: 'Geyvi Geycha',
      sintomas: 'No Come',
    },
    {
      id: '2',
      paciente: 'Sadith Guadalupe',
      doctor: 'Geyvi Geycha',
      sintomas: 'No Habla',
    },
    {
      id: '3',
      paciente: 'Fanny Guadalupe',
      doctor: 'Geyvi Geycha',
      sintomas: 'No Corre',
    },
    {
      id: '4',
      paciente: 'Paco Guadalupe',
      doctor: 'Geyvi Geycha',
      sintomas: 'No Escucha',
    },
    {
      id: '5',
      paciente: 'Diego Guadalupe',
      doctor: 'Geyvi Geycha',
      sintomas: 'No Jode',
    },
  ]);

  const deletePatient = (id) => {
    setCitas((currentCitas) => {
      return currentCitas.filter((cita) => cita.id !== id);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#2F3A7D', '#242645']}
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent" />
        <Text style={styles.titulo}>Atenea's Hospital</Text>
        <View style={styles.secondBox}>
          <NewCita />
          <Text style={styles.subtitle}>
            {
              citas.length === 0 ? 'No tienes citas reservadas' : 'Tus Citas:'
            }</Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={citas}
            renderItem={({ item }) => <Cita cita={item} deletePatient={deletePatient} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    marginTop: 100,
    margin: 80,
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
  },
  secondBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minWidth: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2F3A7D',
  }
});

export default App;
