package com.geoni4.api.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.geoni4.api.entity.UserEntity;
import com.geoni4.api.repository.UserRepository;
import com.geoni4.api.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  public List<UserEntity> getUserList() {
    return userRepository.findAllUser();
  }
  
}
