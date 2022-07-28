package com.GatorShare.Service;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GatorShare.Dto.Admin;
import com.GatorShare.Repo.AdminRepo;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@Service

public class AdminService {

    @Autowired
    private AdminRepo adminRepo;
    @Autowired
    private RequestService requestService;


//    create a save_user_logo method that gets primarely the user ip address and other user information

    public void store_userinfo(HttpServletRequest request){

        String get_user_os = "os.name";
        String info = System.getProperty(get_user_os);
        String user_var_name = "user.name";
        String user_var = System.getProperty(user_var_name);



        String scheme = request.getScheme();
        String serverName = request.getServerName();
        int portNumber = request.getServerPort();
        String contextPath = request.getContextPath();
        String servletPath = request.getServletPath();
        String pathInfo = request.getPathInfo();
        String query = request.getQueryString();
        LocalDateTime log_time = LocalDateTime.now();

        String other_info = scheme + serverName + portNumber + contextPath + servletPath + pathInfo + query;

        String clientIp = requestService.getClientIp(request);

        String info_sys = "Here is the details : \n OS Name:- " + info + "IP_address:- " + clientIp + "\n Other Info:- " + other_info + "\n logged time:- " + log_time;


        long Admin_id = 1;
        String Admin_name = "Estefanos ";
        String Admin_email = "HACKFORFUN@tryhackme.com";
        String Admin_password = "somethingVERYcomplected@1888";
        Admin admin = new Admin();
        admin.setId(Admin_id);
        admin.set_name(Admin_name);
        admin.set_email(Admin_email);
        admin.set_password(Admin_password);
        admin.set_details(info_sys);
        adminRepo.save(admin);

    }

    public void Admin_info(){
//        user info, student, teacher and tutor page updated

//        the admin table is hardcoded because admin work close with dev team.It is not neccery for admin to create




    }

}
