package com.keycloak;

import org.keycloak.adapters.KeycloakDeployment;
import org.keycloak.adapters.rotation.AdapterTokenVerifier;
import org.keycloak.common.VerificationException;
import org.keycloak.representations.AccessToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;

public class KeycloakAuthenticationFilter extends GenericFilterBean {

    private KeycloakConfig keycloakConfig = new KeycloakConfig();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String authHeader = httpRequest.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String tokenString = authHeader.substring(7);
            KeycloakDeployment deployment = keycloakConfig.getKeycloakDeployment();
            AccessToken token = null;
            try {
                token = AdapterTokenVerifier.verifyToken(tokenString, deployment);
            } catch (VerificationException e) {
                throw new RuntimeException(e);
            }
            if (token != null && !token.isExpired()) {
                UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(token.getPreferredUsername(), null, new ArrayList<>());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(request, response);
    }
}