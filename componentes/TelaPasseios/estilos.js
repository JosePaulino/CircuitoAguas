import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  img:{
    width: 300,
    height: 80,
    marginBottom: 20,
  },

  container:{
    backgroundColor: '#f4fbc3',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  titulo1:{
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
    paddingBottom: 5,    
  },

  textDescricao:{
    textAlign:'center',
    paddingBottom: 20,
  },

  cards:{
    backgroundColor:'#fff',
    width: 320,
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 5,    
  },

})

export default estilos;