import { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const UserContext = createContext({ user: null });

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  
    let unsubscribe;
  
    if (user) {
      unsubscribe = firebase.firestore().collection('users').doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            setUser(doc.data());
          } else {
            console.log('No such document!');
          }
        });
    }
  
    return () => {
      unsubscribeAuth();
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);
  
  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('User signed out successfully');
    }).catch((error) => {
      console.log('Error signing out:', error);
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
