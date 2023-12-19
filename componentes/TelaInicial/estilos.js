import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img:{
    width: 300,
    height: 300,
    marginBottom: 20,
  },

  container:{
    backgroundColor: '#e1e3e4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo:{
    backgroundColor: '#ffffff',
    width:320,
    padding:10,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 5,    
  },

  paragrafo:{
    fontSize:26,
    textAlign:'center',
    fontWeight:'bold',
    paddingBottom:10,
  },

  subTitulo:{
    textAlign: 'center',
    paddingBottom: 20,
  },

  botoes:{
    paddingBottom:10,
  },

 });

 export default styles;