package com.keycloak.jasperkeycloak;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;

@Configuration
public class OidcConfig {

    @Bean
    public OidcUserService oidcUserService() {
        return new OidcUserService();
    }
}
