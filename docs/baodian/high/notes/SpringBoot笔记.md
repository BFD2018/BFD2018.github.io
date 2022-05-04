---
title: SpringBoot快速入门
date: 2022-4-30
categories:
 - Java
tags:
 - Spring
 - JavaWeb
sticky: 2
---

:::tip 提示
快速入门springboot开发
:::

<!-- more -->

## SpringBoot的前世今生
1、Spring能做什么
1.1、Spring的能力

1.2、Spring的生态
https://spring.io/projects/spring-boot
覆盖了：
● web开发
● 数据访问
● 安全控制
● 分布式
● 消息服务
● 移动开发
● 批处理
● ......
1.3、Spring5重大升级
1.3.1、响应式编程

1.3.2、内部源码设计
基于Java8的一些新特性，如：接口默认实现。重新设计源码架构。
2、为什么用SpringBoot
Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
能快速创建出生产级别的Spring应用（简化开发）
2.1、SpringBoot优点
● Create stand-alone Spring applications
  ○ 创建独立Spring应用
● Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
  ○ 内嵌web服务器
● Provide opinionated 'starter' dependencies to simplify your build configuration
  ○ 自动starter依赖，简化构建配置
● Automatically configure Spring and 3rd party libraries whenever possible
  ○ 自动配置Spring以及第三方功能
● Provide production-ready features such as metrics, health checks, and externalized configuration
  ○ 提供生产级别的监控、健康检查及外部化配置
● Absolutely no code generation and no requirement for XML configuration
  ○ 无代码生成、无需编写XML
SpringBoot是整合Spring技术栈的一站式框架
SpringBoot是简化Spring技术栈的快速开发脚手架
2.2、SpringBoot缺点
● 人称版本帝，迭代快，需要时刻关注变化
● 封装太深，内部原理复杂，不容易精通
3、时代背景
3.1、微服务
James Lewis and Martin Fowler (2014)  提出微服务完整概念。https://martinfowler.com/microservices/
In short, the microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.-- James Lewis and Martin Fowler (2014)
● 微服务是一种架构风格
● 一个应用拆分为一组小型服务
● 每个服务运行在自己的进程内，也就是可独立部署和升级
● 服务之间使用轻量级HTTP交互
● 服务围绕业务功能拆分
● 可以由全自动部署机制独立部署
● 去中心化，服务自治。服务可以使用不同的语言、不同的存储技术
3.2、分布式

分布式的困难
● 远程调用
● 服务发现
● 负载均衡
● 服务容错
● 配置管理
● 服务监控
● 链路追踪
日志管理
● 任务调度
● ......

分布式的解决
● SpringBoot + SpringCloud

3.3、云原生
原生应用如何上云。 Cloud Native

上云的困难
● 服务自愈
● 弹性伸缩
● 服务隔离
● 自动化部署
● 灰度发布
● 流量治理
● ......

上云的解决


4、如何学习SpringBoot
4.1、官网文档架构




查看版本新特性；
https://github.com/spring-projects/spring-boot/wiki#release-notes

前后端分离数据交互
Java后端和Vue前端数据交互一般采用JSON格式
基本方式
封装RespBean类
package com.xjt.blog.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RespBean {
    private Integer status = 0;
    private String msg;
    private Object obj;

    public static RespBean build(){
        return new RespBean();
    }

    public static RespBean ok(String msg){
        return new RespBean(200,msg,null);
    }

    public static RespBean ok(String msg, Object obj){
        return new RespBean(200,msg,obj);
    }

    public static RespBean error(String msg){
        return new RespBean(500,msg,null);
    }

    public static RespBean error(String msg, Object obj){
        return new RespBean(500,msg,obj);
    }
}

使用示例：
@RequestMapping("/get")
public Result get(){
    HashMap map = new HashMap();
    map.put("username","admin");
    map.put("password","123456");
    Result r = new Result();
    r.code(Result.SUCCESS).message("成功访问").data(map);
    return r;
}
高级用法
参考RuoYi项目

pom.xml
pom.xml文件标签
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
  http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <!--继承 SpringBoot 框架的一个父项目，所有自己开发的 Spring Boot 都必须的继承-->
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.4.3</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>
  
  <!--当前项目的 GAV 坐标-->
  <groupId>com.bjpowernode.springboot</groupId>
  <artifactId>002-springboot-springmvc</artifactId>
  <version>1.0.0</version>
  
  <!--maven 项目名称，可以删除-->
  <name>002-springboot-springmvc</name>
  <!--maven 项目描述，可以删除-->
  <description>Demo project for Spring Boot</description>
  
  <!--maven 属性配置，可以在其它地方通过${}方式进行引用-->
  <properties>
  	<java.version>1.8</java.version>
  </properties>
  
  <!--maven依赖-->
  <dependencies>

  </dependencies>
  
  <build>
    <plugins>
      <!--SpringBoot 提供的打包编译等插件-->
      <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
  
  <!--保留src/main/java 路径下的xml数据库映射文件-->
  <resources>
    <resource>
      <directory>src/main/java</directory>
      <includes>
        <include>**/*.properties</include>
        <include>**/*.xml</include>
      </includes>
      <filtering>false</filtering>
    </resource>

    <resource>
      <directory>src/main/resources</directory>
      <includes>
        <include>**/*.properties</include>
        <include>**/*.xml</include>
      </includes>
      <filtering>false</filtering>
    </resource>
  </resources>
</project>
常用的Maven依赖
<!--springboot的web服务starter-->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!--springboot测试starter-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>

<!--热部署-->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-devtools</artifactId>
  <scope>runtime</scope>
  <optional>true</optional>
</dependency>

<!--lombok-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-freemarker</artifactId>
</dependency>

<!--mysql数据库连接驱动-->
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.25</version>
</dependency>
<!--mybatis-plus-->
<dependency>
  <groupId>com.baomidou</groupId>
  <artifactId>mybatis-plus-boot-starter</artifactId>
  <version>3.4.2</version>
</dependency>

<!--集成thymeleaf模板-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>

<!--集成redis数据库-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<!--集成javax.mail邮件-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
    <version>2.4.1</version>
</dependency>

<!--集成springsecurity安全框架-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-test</artifactId>	<!--springsecurity测试(可选)-->
    <scope>test</scope>
</dependency>

<!--导入shiro-redis的starter包-->
<dependency>
  <groupId>org.crazycake</groupId>
  <artifactId>shiro-redis-spring-boot-starter</artifactId>
  <version>3.3.1</version>
</dependency>

<!-- hutool工具类-->
<dependency>
  <groupId>cn.hutool</groupId>
  <artifactId>hutool-all</artifactId>
  <version>5.1.4</version>
</dependency>

<!--jwt-->
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt</artifactId>
  <version>0.9.1</version>
</dependency>

<!--集成druid数据库连接池 springboot2.x以上默认使用com.zaxxer.hikari.HikariDataSource 数据源-->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.24</version>
</dependency>
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>		<!--druid连接池需要log4j日志框架-->
    <version>1.2.17</version>
</dependency>
maven离线安装jar
##1、首先到mvnrepository下载jar包
<!-- https://mvnrepository.com/artifact/org.apache.tomcat.embed/tomcat-embed-jasper -->
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <version>9.0.40</version>
</dependency>

##2、安装命令
mvn install:install-file -Dfile=tomcat-embed-jasper.jar -DgroupId=org.apache.tomcat.embed -DartifactId=tomcat-embed-jasper -Dversion=9.0.40 -Dpackaging=jar

核心配置文件
配置文件可以存放在四个不同位置，对应的优先级也不同

application.properties
server.port=8181
server.servlet.context-path=/shiro
spring.application.name=shiro-jsp

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/my-shiro-jsp?useUnicode=true&characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

spring.mvc.view.prefix=/
spring.mvc.view.suffix=.jsp

mybatis.mapper-locations=classpath*:mapper/*.xml
mybatis.type-aliases-package=com.xjt.entity
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
application.yaml
fdfs:
  soTimeout: 1500
  connectTimeout: 600
  thumbImage:
    width: 150
    height: 150
  trackerList:
    - 192.168.157.129:22122

spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/my-fastdfs?useUnicode=true&characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
    username: root
    password: root
    type:
      com.alibaba.druid.pool.DruidDataSource
  
  profiles:
    active: dev			#2.4以上版本不同
    
  servlet:
    multipart:
      max-file-size: 100MB
      max-request-size: 1000MB
	
  # 配置 redis
  redis:
  	port: 6379
  	host: 127.0.0.1
  	database: 0
  	timeout: 3000
  
  mvc:
    view:
      prefix: /
      suffix: .html

server:
  port: 8080
  servlet:
    context-path: /
    
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    cache-enabled: true
  mapper-locations: classpath:/mapper/*.xml
  type-aliases-package: com.xjt.shiro.domain
自定义配置
