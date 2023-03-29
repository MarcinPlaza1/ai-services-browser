import React, { useContext, useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';
import { UserContext } from '../../contexts/UserContext';
import SearchBar from '../SearchBar/SearchBar';
import { Container, Logo, Wrapper, SignInButton, Username, DropdownMenu, DropdownItem, Icon } from './HeaderStyles';

const Header = ({ setSearchTerm, allServices }) => {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(user != null);
  const [displayName, setDisplayName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(user != null);
    if (user) {
      const userRef = firestore.doc(`users/${user.uid}`);
      userRef.get().then(doc => {
        if (doc.exists) {
          setDisplayName(doc.data().displayName);
        }
      }).catch(error => {
        console.error('Error getting user document:', error);
      });
    }
  }, [user]);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      setDisplayName('');
      setDropdownOpen(false);
    }).catch((error) => {
      console.log('Error signing out:', error);
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>AI Services</Logo>
        <SearchBar setSearchTerm={setSearchTerm} allServices={allServices} />
        {isLoggedIn ? (
          <>
            <Username onClick={toggleDropdown}>{displayName ? displayName : 'Loading...'} <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg></span>
            </Username>
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownItem><Icon xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="7" r="4"></circle><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></Icon>Account</DropdownItem>
                <DropdownItem><Icon xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></Icon>Favorite</DropdownItem>
                <DropdownItem onClick={handleSignOut}><Icon xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M7 12h14l-3 -3m0 6l3 -3"></path></Icon>Sign Out</DropdownItem>
              </DropdownMenu>
            )}
          </>
        ) : (
          <SignInButton onClick={() => (window.location.href = '/login')}>
            Sign In / Sign Up
          </SignInButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

             
