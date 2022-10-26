import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { Card } from "react-native-paper";
export default function Feed() {
  const [data, setData] = useState([]);
  //console.log(data);
  const url =
    "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=43fb97ec9aca432abe1d60e848456d35";

  const getArticles = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      {Object.keys(data).length > 0 && (
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View
            style={{flex: 1, marginStart: 5, marginEnd: 5,}}>

                <Text style={styles.title} >Feed Semanal</Text>
                <Text style={styles.titleDescription}> Saiba O Que Acontece No Mundo</Text>

            {data.articles.map((article, index) => (
              <Card key={index}>
                <View style={styles.artigos}>
                  

                  <TouchableOpacity>
                    <Image
                      source={{ uri: article.urlToImage }}
                      style={styles.imagens}
                    />
                    <Text style={styles.artigoTitle}> {article.title} </Text>
                    
                  </TouchableOpacity>
                </View>

        
                
              </Card>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 33,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 50,
        marginStart:20
    },
    titleDescription:{
        marginStart: 17,
        marginTop: 10,
        marginBottom: 20
    },
  artigos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 10,
  },
  artigoTitle:{
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    marginTop: -80,
    opacity: 0.7,
    paddingVertical: 8,
    paddingHorizontal: 18,
    width: 240,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20
    
  },
  imagens: {
    width: 300,
    
    height: 300,
    borderRadius: 30,
    alignSelf: 'center'
    
  },
  decriçãoArtigo: {
    fontSize: 12,
    paddingTop: 30
    
  },
  publicação: {
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
});
