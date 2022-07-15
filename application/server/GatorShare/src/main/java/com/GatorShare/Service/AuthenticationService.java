package com.GatorShare.Service;

import com.GatorShare.Dto.AuthenticationToken;
import com.GatorShare.Excpetions.AuthenticationFailException;
import com.GatorShare.Repo.TokenRepo;
import com.GatorShare.config.messageString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GatorShare.Dto.User;
import java.util.Objects;
@Service
public class AuthenticationService {

    @Autowired
    public TokenRepo tokenRepo;

//    Save the token conformation
    public void saveConformedToken(AuthenticationToken authenticationToken){
        tokenRepo.save(authenticationToken);
    }

//    get the token from the user

    public AuthenticationToken getTokens(User user){
        return tokenRepo.findTokenByUser(user);
    }

//    get the user from the token

    public User getuser(String token){
        AuthenticationToken authenticationToken = tokenRepo.findTokenByToken(token);
        if(Objects.nonNull(authenticationToken)){
            if(Objects.nonNull(authenticationToken.getUser())){
                return authenticationToken.getUser();
            }
        }
        return null;
    }
//    check if the token is valid

    public void authenticate(String token) throws AuthenticationFailException{
        if(!Objects.nonNull(token)){
            throw new AuthenticationFailException(messageString.Auth_Token_not_found);
        }
        if(!Objects.nonNull(getuser(token))){
            throw new AuthenticationFailException(messageString.Auth_Token_Not_valid);
        }
    }

}
