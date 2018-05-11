package com.vitalii.erp.dao;

import com.vitalii.erp.entity.Role;
import com.vitalii.erp.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface RoleDao extends CrudRepository<Long, Role> {
}
