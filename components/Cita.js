import React from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native';


const Cita = ({ cita, deletePatient }) => {

  const deleteDialog = (id) => {
    console.log("Eliminando...", id);
    deletePatient(id);
  };

  return (
    <View
      style={styles.containerCita}>
      <View style={{ flexDirection: "row", width: '100%', height: 180, borderRadius: 20, }}>
        <View>
          <Image style={{ width: 100, height: 150, resizeMode: 'cover', marginRight: 15, borderRadius: 5 }} source={require('../assets/images/docProfile.jpg')} />
        </View>
        <View style={styles.containerData}>
          <View>
            <Text style={styles.title}>Paciente: </Text>
            <Text style={styles.info}>{cita.paciente}</Text>
          </View>
          <View>
            <Text style={styles.title}>Doctor(a): </Text>
            <Text style={styles.info}>{cita.doctor}</Text>
          </View>
          <View>
            <Text style={styles.title}>Sintomas: </Text>
            <Text style={styles.info}>{cita.sintomas}</Text>
          </View>
          <View>
            <TouchableHighlight onPress={() => deleteDialog(cita.id)} style={styles.btnDelete}>
              <Text style={styles.textButton}>Eliminar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCita: {
    backgroundColor: '#2F3A7D',
    marginBottom: 30,
    padding: 20,
    borderRadius: 20,
  },
  containerData: {
    flexDirection: 'column',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#fff',
    marginBottom: 3,
  },
  info: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#fff',
    marginBottom: 8,
  },

  btnDelete: {
    padding: 10,
    backgroundColor: '#2F3A7D',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
  },

  textButton: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: "bold",
  }
});

export default Cita;
