package com.vitalii.erp.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@RequiredArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column
    @NonNull
    String username;

    @NonNull
    @Column
    String email;

    @NonNull
    @Column
    String password;

}
