package com.vitalii.erp.service;

import com.vitalii.erp.dao.UserDao;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public Iterable<Long> findAll(){
        return userDao.findAll();
    }
}
