---
title: SpringMVC搭建MVC架构
date: 2022-4-30
categories:
 - Java
tags:
 - Spring
 - JavaWeb
---

## 概念
**SpringMVC优点**
> 1. 基于 MVC  架构
> 
基于 MVC 架构，功能分工明确。解耦合，
> 2. 容易理解，上手快；使用简单。
> 
就可以开发一个注解的 SpringMVC 项目，SpringMVC 也是轻量级的，jar 很小。不依赖的
> 特定的接口和类。
> 3. 作 为 Spring 框 架  一 部 分 能 够 使 用 Spring 的 IoC 和 Aop
> 
方 便  整 合Strtus,MyBatis,Hiberate,JPA 等等其他框架。
> 4. SpringMVC强化注解的使用，在控制器，Service ，Dao  都可以使用注解 方便灵活
> 
使用@Controller 创建处理器对象
> @Service 创建业务对象
> @Autowired 或者@Resource在控制器类中注入 Service, Service 类中注入 Dao

## SpringMVC的注解式开发
所谓 SpringMVC 的注解式开发是指，在代码中通过对类与方法的注解，便可完成处理器在 springmvc 容器的注册。注解式开发是重点；
中央调度器为一个Servlet，名称为 DispatcherServlet。中央调度器的全限定性类名在导入的 Jar 文件，spring-webmvc-5.2.5.RELEASE.jar 的第一个包 org.springframework.web.servlet下可找到，打开 DispatcherServlet 的源码，其继承自 FrameworkServlet，而该类中有一个属性contextConfigLocation，用于设置 SpringMVC 配置文件的路径及文件名。该初始化参数的属性就来自于这里。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/1559629/1633100694828-e3dc4f5f-73a5-4625-93bb-810574760c2f.png)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/1559629/1633100706933-06534523-4169-460a-961b-df104dfae27f.png)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/1559629/1633100715916-28341c31-ec51-4e6d-a452-801fb824befd.png)
### @RequestMapping定义请求规则
> 通过@RequestMapping 注解可以定义处理器对于请求的映射规则。
> 该注解可以注解在方法上，也可以注解在类上，但意义是不同的。
> value 属性值常以“/”开始。
> @RequestMapping 的 value 属性用于定义所匹配请求的 URI。但对于注解在方法上与类
> 上，其 value 属性所指定的 URI，意义是不同的。
> 一个@Controller 所注解的类中，可以定义多个处理器方法。当然，不同的处理器方法
> 所匹配的 URI 是不同的。这些不同的 URI 被指定在注解于方法之上的@RequestMapping 的
> value 属性中。但若这些请求具有相同的 URI 部分，则这些相同的 URI，可以被抽取到注解在
> 类之上的@RequestMapping 的 value 属性中。此时的这个 URI 表示模块的名称。URI 的请求
> 是相对于 Web 的根目录。
> 换个角度说，要访问处理器的指定方法，必须要在方法指定 URI 之前加上处理器类前定
> 义的模块名称

#### 对请求方式的定义
> 对于@RequestMapping，其有一个属性 method，用于对被注解方法所处理请求的提交
> 方式进行限制，即只有满足该method属性指定的提交方式的请求，才会执行该被注解方法。
> Method 属性的取值为 RequestMethod 枚举常量。常用的为 RequestMethod.GET 与
> RequestMethod.POST，分别表示提交方式的匹配规则为 GET 与 POST 提交。

请求方式方式一般有：**get  post  put  delete**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641304386087-81a6a5b2-5581-46a0-a1fa-edf0b5fec8fd.png#clientId=udfb488b7-ccab-4&from=paste&height=323&id=u374d62fa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=431&originWidth=875&originalType=binary&ratio=1&size=117637&status=done&style=stroke&taskId=ue093756a-d22b-4aa9-a8be-88bffc44a7f&width=656)
也就是说，只要指定了处理器方法匹配的请求提交方式为 POST，则相当于指定了请求发送的方式：要么使用表单请求，要么使用 AJAX 请求。其它请求方式被禁用。
当然，若不指定 method 属性，则无论是 GET 还是 POST 提交方式，均可匹配。即对于请求的提交方式无要求。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641304532499-0ed7b1ec-2e8e-4da4-b312-47fc238c564d.png#clientId=udfb488b7-ccab-4&from=paste&height=345&id=uf9c4510c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=459&originWidth=790&originalType=binary&ratio=1&size=150602&status=done&style=stroke&taskId=u739b3b2a-4487-4ec7-b5b1-a5b51cfa5f0&width=593)
### 处理器方法的参数
处理器方法可以包含以下四类参数，这些参数会在系统调用时由系统自动赋值，即程序
员可在方法内直接使用。
➢ HttpServletRequest
➢ HttpServletResponse
➢ HttpSession
➢ 请求中所携带的请求参数
#### 逐个参数接收
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641304743662-553007a7-c7e7-4d92-b8a1-9f7cfceec0b0.png#clientId=udfb488b7-ccab-4&from=paste&height=474&id=u03407e4e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=632&originWidth=637&originalType=binary&ratio=1&size=155739&status=done&style=stroke&taskId=u67c7cffb-40bc-4778-837b-a0072870533&width=478)
#### 接收get请求的QueryString
补充：URL
> URL由三部分组成：资源类型、存放资源的主机域名、资源文件名。
> 也可认为由4部分组成：**协议、主机、端口、路径**
> URL的一般语法格式为(带方括号[]的为可选项)：
> protocol :// hostname[:port] / path / [:parameters][?query]#fragment
> **例如：**https://www.baidu.com/s?tn=88093251_10_hao_pg&ie=utf-8&wd=ieda
> 请求路径是：/s
> 查询字符串是：tn=88093251_10_hao_pg&ie=utf-8&wd=ieda
> 
> **hostname（主机名）**
> 是指存放资源的服务器的[域名系统](https://baike.baidu.com/item/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F)(DNS) 主机名或 IP 地址。有时，在主机名前也可以包含连接到服务器所需的用户名和密码（格式：username:password@hostname）。
> **port（端口号）**
> 整数，可选，省略时使用方案的默认端口，各种[传输协议](https://baike.baidu.com/item/%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)都有默认的端口号，如http的默认端口为80。如果输入时省略，则使用默认端口号。有时候出于安全或其他考虑，可以在服务器上对端口进行重定义，即采用非标准端口号，此时，URL中就不能省略端口号这一项。
> **path（路径）**
> 由零或多个“/”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
> **parameters（参数）**
> 这是用于指定特殊参数的可选项,有服务器端程序自行解释。
> **query(查询)**
> 可选，用于给[动态网页](https://baike.baidu.com/item/%E5%8A%A8%E6%80%81%E7%BD%91%E9%A1%B5)（如使用CGI、ISAPI、PHP/JSP/ASP/ASP.NET等技术制作的网页）传递参数，可有多个参数，用“&”符号隔开，每个参数的名和值用“=”符号隔开。
> **fragment（信息片断）**
> 字符串，用于指定网络资源中的片段。例如一个网页中有多个名词解释，可使用fragment直接定位到某一名词解释。

一个标准的URL网址，在最后有一个querystring部分，表示对页面查询，用?来表示这部分，内容必须是k=v,对个参数用&来链接
```java
//前端发请求
let baseUrl = `/blog/getByPage?current=${this.currentPage}&size=${this.pageSize}`;

//后端接收
@GetMapping("/getByPage")
public RespBean getBlogsByPage(
    @RequestParam(value = "current",required = false,defaultValue = "1") Integer current,
	@RequestParam(value = "size",required = false,defaultValue = "6") Integer size,
                             ){
    
    return tBlogService.getBlogsByPage(current, size,published,flag,share_statement,is_delete);
}
```
#### 接收post请求的data
前端发请求
```javascript
ruleForm: {
  username: "admin",
  password: "123456",
  verify_code: "",
},

//$postRequest是封装的axios请求
this.$postRequest("/user/login",this.ruleForm).then(res =>{
   //console.log(res);
})
```
后端接收
```java
@PostMapping("/login")
@ResponseBody
public RespBean login(@RequestBody HashMap<String,String> params, HttpSession session) {
    String username = params.get("username");
    String password = params.get("password");
    String verify_code = params.get("verify_code");
}
```
#### 请求参数中文乱码问题
（SpringBoot中已解决）
对于前面所接收的请求参数，若含有中文则会出现中文乱码问题。Spring 对于请求参数中的中文乱码问题，给出了专门的字符集过滤器：spring-web-5.2.5.RELEASE.jar 的
org.springframework.web.filter 包下的 CharacterEncodingFilter 类。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641304813718-217660a5-f261-4c12-bbb2-61e61f37c2e3.png#clientId=udfb488b7-ccab-4&from=paste&height=76&id=u5eb9924e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=102&originWidth=431&originalType=binary&ratio=1&size=30253&status=done&style=stroke&taskId=u1064416e-a682-466a-b4c2-47c83aed940&width=323)
**1、解决方案：**
在 web.xml 中注册字符集过滤器，即可解决 Spring 的请求参数的中文乱码问题。不过，最好将该过滤器注册在其它过滤器之前。因为过滤器的执行是按照其注册顺序进行的。直接在项目 receiveParameters-property 上进行修改。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641304860694-2ad1ea67-03a1-40fc-942b-a6553d37227f.png#clientId=udfb488b7-ccab-4&from=paste&height=422&id=ud8d3f564&margin=%5Bobject%20Object%5D&name=image.png&originHeight=563&originWidth=864&originalType=binary&ratio=1&size=152347&status=done&style=stroke&taskId=u3702be2a-6fbd-497c-8603-875250492c4&width=648)
**2、源码分析**
字符集设置核心方法：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641304912068-c092640a-9de8-4715-a307-d50e567214b3.png#clientId=udfb488b7-ccab-4&from=paste&height=271&id=u3109b662&margin=%5Bobject%20Object%5D&name=image.png&originHeight=362&originWidth=867&originalType=binary&ratio=1&size=112908&status=done&style=stroke&taskId=u5ed99efb-c69c-4765-a5e9-d311e3abf97&width=650)
#### 使用@RequestParam校正请求参数名
所谓校正请求参数名，是指若请求URL所携带的参数名称与处理方法中指定的参数名不相同时，则需在处理方法参数前，添加一个注解@RequestParam(“请求参数名”)，指定请求 URL 所携带参数的名称。该注解是对处理器方法参数进行修饰的。value 属性指定请求参数的名称。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641305018356-42990e91-1730-401e-bd4b-4ee0587fe386.png#clientId=udfb488b7-ccab-4&from=paste&height=501&id=u404e320d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=668&originWidth=873&originalType=binary&ratio=1&size=239688&status=done&style=stroke&taskId=u3dd79fa1-089e-4eca-b886-71e655b5027&width=655)
**@RequestParam 注解**
```java
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RequestParam {
    /**
	 * 指定请求参数名
	 */
	@AliasFor("name")
	String value() default "";

	/**
	 * value的别名
	 */
	@AliasFor("value")
	String name() default "";

	/**
	 是否该参数是必须的，默认是true
	 */
	boolean required() default true;

	/** 
    当请求参数为空或没有提供使用默认值
	 */
	String defaultValue() default ValueConstants.DEFAULT_NONE;

}
```
#### 对象参数接收
将处理器方法的参数定义为一个对象（在entity或domain中定义好的），只要保证请求参数名与这个对象的属性同名即可。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641306484062-48b7db2c-0655-46fb-aa51-93e179dc817c.png#clientId=udfb488b7-ccab-4&from=paste&height=249&id=ub4bd14d2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=332&originWidth=1039&originalType=binary&ratio=1&size=148741&status=done&style=stroke&taskId=ue4369476-61a1-42bd-b09a-12137d6716b&width=779)
### 处理器方法的返回值
#### 返回ModelAndView
> 若处理器方法处理完后，**需要跳转到其它页面且又要在跳转的资源间传递数据**，此时
> 处理器方法返回 ModelAndView 比较好。当然若要返回 ModelAndView，则处理器方法中
> 需要定义 ModelAndView 对象。
> 在使用时，若该处理器方法**只是进行跳转而不传递数据，或只是传递数据而并不向任何**
> **资源跳转**（如对页面的 Ajax 异步响应），此时若返回 ModelAndView，则将总是有一部分多
> 余：要么 Model 多余，要么 View 多余。即此时返回 ModelAndView 将不合适。

#### 返回String
> 处理器方法返回的字符串可以指定逻辑视图名，通过视图解析器解析可以将其转换为物理视图地址
> **返回内部资源逻辑视图名**：
> 若要跳转的资源为内部资源，则视图解析器可以使用 InternalResourceViewResolver 内部资源视图解析器。此时处理器方法返回的字符串就是要跳转页面的文件名去掉文件扩展名后的部分。这个字符串与视图解析器中的 prefix、suffix 相结合，即可形成要访问的 URI。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641477756701-3e483bde-304d-4ae4-a9b1-6a8654df8990.png#clientId=u2b4ca640-0d98-4&from=paste&height=427&id=u1588bc6b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=569&originWidth=985&originalType=binary&ratio=1&size=112897&status=done&style=stroke&taskId=ue255024b-6d1c-4501-aadc-6d710dac2bb&width=739)
在配置文件application.properties中定义thymeleaf模板文件的前缀、后缀（默认能直接访问到放在templates目录下的html文件）
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641477642603-8aeec022-e737-400b-9558-847d2cf2c5aa.png#clientId=u2b4ca640-0d98-4&from=paste&height=269&id=u9d6fd1e0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=358&originWidth=746&originalType=binary&ratio=1&size=106249&status=done&style=stroke&taskId=u0af4a0ab-2818-4206-855b-0a8886747ce&width=560)
#### 返回 void
> 对于处理器方法返回 void 的应用场景，AJAX 响应.
> 若处理器对请求处理后，无需跳转到其它任何资源，此时可以让处理器方法返回 void。

例如：服务器直接返回给前台response响应的二进制文件
```java
@RequestMapping("/getCaptcha")
public void getCaptchaImg(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
    SpecCaptcha specCaptcha = new SpecCaptcha();
    specCaptcha.setLen(4);
    specCaptcha.setHeight(48);
    String text = specCaptcha.text();
    log.warn("getCaptchaImg生成的验证码："+text);
    
    session.setAttribute("verify_code",text);
    CaptchaUtil.out(specCaptcha,request,response);
}
```
#### 返回对象Object
> 处理器方法也可以返回 Object 对象。这个 Object 可以是 Integer，String，自定义对象，
> Map，List 等。但返回的对象不是作为逻辑视图出现的，而是作为直接在页面显示的数据出
> 现的，对于前台端分离设计，一般返回给前台的是json数据
> 返回对象，需要使用@ResponseBody注解，将转换后的 JSON 数据放入到响应体中。

Restful风格设计返回给前台的json数据
```java
@Slf4j
@RestController
@RequestMapping("/blog")
public class TBlogController {
    @Autowired
    private TBlogService tBlogService;

    @GetMapping("/getByPage")
    public RespBean getBlogsByPage(
        @RequestParam(value = "current",required = false,defaultValue = "1") Integer current,
        @RequestParam(value = "size",required = false,defaultValue = "6") Integer size,
        @RequestParam(value = "published",required = false) Boolean published,
        @RequestParam(value = "flag",required = false) String flag,
        @RequestParam(value = "share_statement",required = false) Boolean share_statement,
        @RequestParam(value = "is_delete",required = false) Boolean is_delete){
        log.info("current="+current);
        log.info("size="+size);
        
        return tBlogService.getBlogsByPage(current, size,published,flag,share_statement,is_delete);
    }
}
```
定义返回的JSON数据格式：
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
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

    public static RespBean ok(Object obj){
        return new RespBean(200,"ok",obj);
    }

    public static RespBean warn(String msg){
        return new RespBean(204,msg,null);
    }

    public static RespBean warn(String msg, Object obj){
        return new RespBean(204,msg,obj);
    }

    public static RespBean error(String msg){
        return new RespBean(500,msg,null);
    }

    public static RespBean error(String msg, Object obj){
        return new RespBean(500,msg,obj);
    }
}
```
### 请求重定向和转发
> 当处理器对请求处理完毕后，向其它资源进行跳转时，有两种跳转方式：请求转发与重
> 定向。而根据所要跳转的资源类型，又可分为两类：跳转到页面与跳转到其它处理器。
> 注意，对于请求转发的页面，可以是WEB-INF中页面；而重定向的页面，是不能为WEB-INF
> 中页的。因为重定向相当于用户再次发出一次请求，而用户是不能直接访问 WEB-INF 中资
> 源的。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641479935021-93254761-cd4c-4ea4-94bf-2d9967018b89.png#clientId=u2b4ca640-0d98-4&from=paste&height=258&id=uc9e30088&margin=%5Bobject%20Object%5D&name=image.png&originHeight=344&originWidth=668&originalType=binary&ratio=1&size=70748&status=done&style=stroke&taskId=u82752570-b023-4dca-b804-3236de9f657&width=501)
SpringMVC 框架把原来 Servlet 中的请求转发和重定向操作进行了封装。现在可以使用简
单的方式实现转发和重定向。
forward:表示转发，实现 request.getRequestDispatcher("xx.jsp").forward()
redirect:表示重定向，实现 response.sendRedirect("xxx.jsp")
#### 请求转发
> 处理器方法返回 ModelAndView 时，需在 setViewName()指定的视图前添加 forward:
> 且此时的视图不再与视图解析器一同工作，这样可以在配置了解析器时指定不同位置的视图。
> 视图页面必须写出相对于项目根的路径。forward 操作不需要视图解析器。
> 处理器方法返回 String,在视图路径前面加入 forward: 视图完整路径。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641480094970-d6dce005-311f-4661-b646-bad1076cc1f3.png#clientId=u2b4ca640-0d98-4&from=paste&height=315&id=u67347cc9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=420&originWidth=846&originalType=binary&ratio=1&size=145237&status=done&style=stroke&taskId=u66a8e4a0-efba-4c4c-afec-bc1dbdf0439&width=635)
#### 请求重定向
> 在处理器方法返回的视图字符串的前面添加 redirect:，则可实现重定向跳转

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641480140586-4b2111cd-3467-43d8-83c4-4a36d5fc443a.png#clientId=u2b4ca640-0d98-4&from=paste&height=267&id=u9dd88fca&margin=%5Bobject%20Object%5D&name=image.png&originHeight=356&originWidth=732&originalType=binary&ratio=1&size=122926&status=done&style=stroke&taskId=u6ac8c68d-2cc5-41ba-b24d-ff5e2e0b5e2&width=549)
#### SpringBoot实现转发和重定向
首先来说说IDEA创建Springboot项目
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641480422018-317460d6-65a3-4cd7-ae36-115b70b0b246.png#clientId=u2b4ca640-0d98-4&from=paste&height=397&id=u1d8f9268&margin=%5Bobject%20Object%5D&name=image.png&originHeight=529&originWidth=354&originalType=binary&ratio=1&size=56879&status=done&style=stroke&taskId=u0b2d2c41-5d55-46a2-b3f8-4d469082ce1&width=266)
> 首先解释一下每个文件夹的作用，如果你是用的是idea创建的springboot项目，会在项目创建的一开始resources文件夹下自动创建static以及templates文件夹，一般static下存放js、css、font、icon等文件，templates存放html页面。
**以上是默认会创建的文件夹以及其作用**
首先static文件夹以及templates文件夹是受保护的，也就是说相当于你将文件放到了传统的ssh或ssm项目的WEB-INF下了。所以也就是说这两个文件夹下的文件是无法通过url直接访问的，以至于在springmvc下使用重定向会报404。
在讲重定向与转发之前先讲一下目录优先级的情况
> **webapp>META-INF/resources>resources>static>public**
**那么如何能够直接访问到html或者css呢？**

**方法一 **
我们可以在resources下创建一个名为public的文件夹，顾名思义，放在此文件夹下的文件是共有的，可以直接通过url访问，当然也可以springmvc重定向访问啦。
**方法二**
在main下创建webapp文件夹，将文件放到此文件夹下，效果同上。
**注！文件夹名字是固定的，起别的名字还是会报404或者无效**
首先呢public与wenapp这二个在使用过程中一般创建一个目录就好了，如下图。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641480652580-e569aa65-e875-487f-9002-6307074545ee.png#clientId=u2b4ca640-0d98-4&from=paste&height=459&id=uaf05927d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=612&originWidth=409&originalType=binary&ratio=1&size=61926&status=done&style=stroke&taskId=u727cae6b-d168-446f-8ca2-0993466ff5f&width=307)
因此，如果我们还在用jsp作为模板引擎，需要手动删除templates目录 创建webapp目录
访问index1.html页面[http://localhost:8888/index1.html](http://localhost:8888/index1.html)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1559629/1641480718975-c7525ef9-c6a4-4b93-a46e-f633ea7c722a.png#clientId=u2b4ca640-0d98-4&from=paste&id=ua2045f55&margin=%5Bobject%20Object%5D&name=image.png&originHeight=143&originWidth=314&originalType=url&ratio=1&size=10736&status=done&style=stroke&taskId=u906def81-8fbd-47f9-a8ee-10d379c40c1)
可以看到直接访问到是webapp下的index.html页面。因为webapp优先级大于public优先级。webapp>public
**转发**
方式一：使用 "forword" 关键字（不是指java关键字），
注意：类的注解不能使用@RestController 要用@Controller
```java
@RequestMapping(value="/test/test01/{name}" , method = RequestMethod.GET)
public String test(@PathVariable String name) {
    return "forword:/ceng/hello.html";
}
```
### 方式二：使用servlet 提供的API，注意：类的注解可以使用@RestController,也可以使用@Controller
```java
@RequestMapping(value="/test/test01/{name}" , method = RequestMethod.GET)
public void test(@PathVariable String name, HttpServletRequest request, HttpServletResponse response) throws Exception {
    request.getRequestDispatcher("/ceng/hello.html").forward(request,response);
}
```
**重定向**

方式一：使用 "redirect" 关键字（不是指java关键字），注意：类的注解不能使用@RestController，要用@Controller
```java
@RequestMapping(value="/test/test01/{name}" , method = RequestMethod.GET)
public String test(@PathVariable String name) {
    return "redirect:/ceng/hello.html";
}
```
方式二：使用servlet 提供的API，注意：类的注解可以使用@RestController，也可以使用@Controller
```java
@RequestMapping(value="/test/test01/{name}" , method = RequestMethod.GET)
public void test(@PathVariable String name, HttpServletResponse response) throws IOException {
    response.sendRedirect("/ceng/hello.html");
}
```
注意：使用API进行重定向时，一般会在url之前加上：request.getContextPath()
## SpringMVC核心技术
### 异常处理
### 拦截器
## 

