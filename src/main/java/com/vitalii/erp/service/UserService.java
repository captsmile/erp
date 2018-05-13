package com.vitalii.erp.service;

import com.vitalii.erp.dao.UserDao;
import com.vitalii.erp.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class UserService implements UserDetailsService {
    UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public Iterable<User> findAll(){
        userDao.findAll().forEach(System.out::println);
        return userDao.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    public void save(User user) {
        userDao.save(user);
    }

    @PostConstruct
    void dd(){
        userDao.save(new User("andrew","and@i.ua","1111"));
    }
}
