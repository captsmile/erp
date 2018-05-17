package com.vitalii.erp.controller;

import javafx.scene.paint.Color;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Random;

import static com.vitalii.erp.util.GetClassName.getClassName;

@Controller
@CrossOrigin("*")
public class WebSocketController {

    private Logger log = LoggerFactory.getLogger(getClassName());

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/all")
    @SendTo("/topic/all")
    public ColorMessage greeting(String colorMessage) {
        log.info("message.getColorString() = " + colorMessage);
        return new ColorMessage("REQUEST");
    }

    @Scheduled(fixedDelay = 1000)
    public void bgColor() {
        Random r = new Random();
        Color rgb = Color.rgb(r.nextInt(255), r.nextInt(255), r.nextInt(255), r.nextDouble());
        String m = rgb.toString();
        String color = m.replace("0x", "#");
        simpMessagingTemplate.convertAndSend("/topic/all", new ColorMessage(color));
        //log.info("Send color: " + color);
    }
}

class ColorMessage {

    private String colorString;

    public String getColorString() {
        return colorString;
    }

    public ColorMessage(String colorString) {
        this.colorString = colorString;
    }

    public ColorMessage() {
    }
}