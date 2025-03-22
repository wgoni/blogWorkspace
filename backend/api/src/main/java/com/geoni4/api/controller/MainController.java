package com.geoni4.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geoni4.api.entity.UserEntity;
import com.geoni4.api.service.UserService;

import lombok.RequiredArgsConstructor;



@RestController
@RequiredArgsConstructor
public class MainController {

  public final UserService userService;
  
  @GetMapping("/")
  public String hello() {
    return new StringBuilder().append("<div>")
        .append("<form>")
          .append("<h1>HELLO WORLD</h1>")
          .append("<input value=\"\"/>")
          .append("<button>OK</button>")
          .append("<input type=\"reset\" />")
        .append("</form>")
        .append("</div>")
        .toString();
  }
  
  @GetMapping("/userList")
  public List<UserEntity> userList() {
      return userService.getUserList();
  }
  

}
