import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MeuBotao from './Componentes/MeuBotao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parangaricutirrimiruaru</Text>
      <MeuBotao titulo="APERTE-ME" 
      onPress={()=>{Alert.alert("ATENÇÃO", "BOTÃO CLICADO")}}>
        
      </MeuBotao> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    }
  },
  titulo:
  {
    color: '#fff',
    fontSize: 18,
  }
});
