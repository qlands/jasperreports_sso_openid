package com.keycloak;

import com.jaspersoft.jasperserver.api.metadata.user.service.UserAuthorityService;
import com.jaspersoft.jasperserver.api.security.externalAuth.processors.ExternalUserSetupProcessor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

public class KeycloakUserSetupProcessor extends ExternalUserSetupProcessor {

    @Autowired
    private UserAuthorityService userAuthorityService;

    public String process(String externalUsername, Map<String, Object> context) {
        return externalUsername;
    }
}