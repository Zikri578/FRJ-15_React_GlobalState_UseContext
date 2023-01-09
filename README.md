# FRJ-15_GlobalState_UseContext

React context merupakan fitur React yang memungkinkan kita untuk mengirimkan data ke seluruh komponen aplikasi tanpa harus melalui proses passing props secara manual melalui setiap tingkatan komponen. Dengan menggunakan context, kita bisa mengelola state global yang dapat diakses oleh seluruh komponen di dalam aplikasi.

Untuk menggunakan context, kita harus membuat sebuah context dengan menggunakan `React.createContext()`. Kemudian, kita dapat menggunakan provider context untuk menyediakan nilai context ke seluruh komponen yang membutuhkannya. Komponen yang akan menerima nilai context dapat menggunakan `useContext` hook untuk mengambil nilai context tersebut.

Contoh penggunaan context dapat dilihat dibawah ini:

    import React, { createContext, useContext } from 'react';

    // Membuat context
    const ThemeContext = createContext();

    // Komponen provider context
    function ThemeProvider({ theme, children }) {
      return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
    }

    // Komponen yang menggunakan context
    function Button() {
      // Mengambil nilai context menggunakan useContext hook
      const theme = useContext(ThemeContext);
      return <button style={{ backgroundColor: theme.background, color: theme.foreground }}>Click me!</button>;
    }

    // Penggunaan context
    function App() {
      return (
        <ThemeProvider theme={{ background: 'red', foreground: 'white' }}>
          <Button />
        </ThemeProvider>
      );
    }
    
Dengan menggunakan context, kita dapat dengan mudah mengelola state global yang dapat diakses oleh seluruh komponen aplikasi tanpa harus melakukan proses passing props secara manual melalui setiap tingkatan komponen.
