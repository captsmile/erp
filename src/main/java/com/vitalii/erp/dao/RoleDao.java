package com.vitalii.erp.dao;

import com.vitalii.erp.entity.Role;
import com.vitalii.erp.entity.User;
import io.swagger.annotations.Api;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;

@RepositoryRestResource
public interface RoleDao extends CrudRepository<Role,Long> {
}
