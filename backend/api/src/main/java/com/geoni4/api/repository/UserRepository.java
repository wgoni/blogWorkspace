package com.geoni4.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.geoni4.api.entity.UserEntity;


public interface UserRepository extends JpaRepository<UserEntity, Long>{

  @Query(value = "select * from minipc_project.users", nativeQuery=true)
  List<UserEntity> findAllUser();
}
