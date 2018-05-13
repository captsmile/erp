package com.vitalii.erp.controller;

import com.vitalii.erp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DataController {

    final HttpHeaders httpHeaders = new HttpHeaders();

    @Autowired
    UserService userService;

    public DataController() {
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
    }

    @GetMapping("/secure/testStr")
    @ResponseBody
    public ResponseEntity<String> secureTestString(){
        return ResponseEntity.ok("/secure/testStr");
    }

    @GetMapping("/secure/test")
    @ResponseBody
    public ResponseEntity<String> secureTest(@AuthenticationPrincipal final UserDetails userDetails){
        System.out.println(userDetails.getUsername());
        userDetails.getAuthorities().forEach(System.out::println);
        return new ResponseEntity<>("/secure/test", httpHeaders, HttpStatus.OK);
    }

    @GetMapping("/notSecure/test")
    public ResponseEntity<String> notSecureTest(){
        return new ResponseEntity<>("/notSecure/test", httpHeaders, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/def/test1")
    public String notSecureTestAdmin(){
        return "/def/test/Admin ??";
    }

    @GetMapping("/def/test2")
    public String notSecureTest2(){
        return "/def/test2/ auth";
    }
}


