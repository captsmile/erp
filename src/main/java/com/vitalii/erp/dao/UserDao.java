package com.vitalii.erp.dao;

import com.vitalii.erp.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<Long, User> {
}
