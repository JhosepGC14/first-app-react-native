import React from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight, TextInput } from 'react-native';

const NewCita = () => {
  return (
    <>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Nueva Cita</Text>
        <View>
          <Text style={styles.label}>Nombre Paciente:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Nombre Paciente:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Nombre Paciente:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <TouchableHighlight style={styles.btnAdd}>
            <Text style={styles.textButton}>Eliminar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: '#2F3A7D',
    marginBottom: 30,
    padding: 20,
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center'
  },

  label: {
    fontSize: 14,
    color: '#fff',
    fontWeight: "bold",
  },

  input: {
    marginTop: 10,
    height: 40,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 10,
  },

  btnAdd: {
    padding: 10,
    backgroundColor: '#2F3A7D',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    marginTop: 15
  },

  textButton: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: "bold",
  }
});

export default NewCita;