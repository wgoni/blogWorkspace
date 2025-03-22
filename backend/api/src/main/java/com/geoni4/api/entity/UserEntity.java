package com.geoni4.api.entity;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserEntity {

  @Id
  private Long userNo;
  private String username;
  private String password;
  private String email;
  private Boolean isValid;
  private Timestamp createdAt;


  public Long getUserNo() {
    return this.userNo;
  }

  public void setUserNo(Long userNo) {
    this.userNo = userNo;
  }
  

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Boolean isIsValid() {
    return this.isValid;
  }

  public Boolean getIsValid() {
    return this.isValid;
  }

  public void setIsValid(Boolean isValid) {
    this.isValid = isValid;
  }


  public Timestamp getCreatedAt() {
    return this.createdAt;
  }

  public void setCreatedAt(Timestamp createdAt) {
    this.createdAt = createdAt;
  }



}
