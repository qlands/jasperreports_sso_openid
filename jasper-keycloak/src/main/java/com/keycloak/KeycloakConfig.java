package com.keycloak;

import org.keycloak.adapters.KeycloakDeployment;
import org.keycloak.adapters.KeycloakDeploymentBuilder;
import java.io.InputStream;

public class KeycloakConfig {

    private KeycloakDeployment keycloakDeployment;

    public KeycloakConfig() {
        InputStream configInputStream = getClass().getResourceAsStream("/keycloak.json");
        keycloakDeployment = KeycloakDeploymentBuilder.build(configInputStream);
    }

    public KeycloakDeployment getKeycloakDeployment() {
        return keycloakDeployment;
    }
}