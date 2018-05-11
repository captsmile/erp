package com.vitalii.erp.entity;

import javax.persistence.*;

@Entity
@Table
public class User {
    Long id;
    String username;
    String email;
    String password;
    Version version;

}
