package com.vitalii.erp.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class Role {
    Long id;
    String role;
}
