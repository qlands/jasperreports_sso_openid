package com.keycloak;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

public class OpenIdAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private OidcUserService oidcUserService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        OidcUserRequest userRequest = (OidcUserRequest) authentication.getPrincipal();
        OidcUser user = oidcUserService.loadUser(userRequest);
        if(user == null){
            throw new BadCredentialsException("OpenID authentication failed");
        }
        return authentication;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return OidcUserRequest.class.isAssignableFrom(authentication);
    }
}
