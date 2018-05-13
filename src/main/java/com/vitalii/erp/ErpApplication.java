package com.vitalii.erp;

import com.vitalii.erp.conf.SwaggerConfig;
import com.vitalii.erp.entity.User;
import com.vitalii.erp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(SwaggerConfig.class)
public class ErpApplication {

    public static void main(String[] args) {
        SpringApplication.run(ErpApplication.class, args);
    }
}
