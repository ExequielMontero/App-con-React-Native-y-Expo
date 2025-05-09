import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function NoticiasScreen() {
  const [news, setNews] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [showWebView, setShowWebView] = useState(false);

  // Use Effect para hacer la solicitud a la API de noticias
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6662af8fed594d7e92f920e99b86e1ef');
        const data = await response.json();
        setNews(data.articles);  // Asumimos que 'articles' contiene las noticias
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.newsItem}
      activeOpacity={0.8}
      onPress={() => {
        if (item.url) {
          setSelectedUrl(item.url);
          setShowWebView(true);
        }
      }}
    >
      {item.urlToImage ? (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {item.url && <Text style={styles.url}>{item.url}</Text>}
    </TouchableOpacity>
  );

  if (showWebView) {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity 
          onPress={() => setShowWebView(false)}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Volver a Noticias</Text>
        </TouchableOpacity>
        <WebView 
          source={{ uri: selectedUrl }}
          style={{ flex: 1 }}
          startInLoadingState={true}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  newsItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  url: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  backButton: {
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});