package com.vitalii.erp.dao;

import com.vitalii.erp.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserDao extends CrudRepository<User,Long> {
}
