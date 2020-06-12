package com.revature.ams.util;

import java.util.HashMap;
import java.util.Map;

import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.stereotype.Component;

@Component
public class SessionFactoryUtil {
	
	private SessionFactory sf;

	private static String url;

	private static String username;

	private static String password;
	private static final String PORT = System.getenv("RDS_PORT");

	private static final String DB_NAME = System.getenv("RDS_DBNAME");

	public SessionFactory getSessionFactory() {
		return this.sf;
	}

	public void setSessionFactory(SessionFactory sf) {
		this.sf = sf;
	}



	public SessionFactoryUtil() {

		if (sf == null) {
			url = System.getenv("RDS_HOSTNAME");
			url = "jdbc:postgresql://" + url + PORT + DB_NAME + "?";
			username = System.getenv("RDS_USERNAME");
			password = System.getenv("RDS_PASSWORD");
			Map<String, String> settings = new HashMap<String, String>();
			settings.put("hibernate.connection.driver_class", "org.postgresql.Driver");
			settings.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect");
			settings.put("hibernate.connection.url",
					"jdbc:postgresql://" + System.getenv("RDS_HOSTNAME") + PORT + DB_NAME + "?");
			settings.put("hibernate.connection.username", username);
			settings.put("hibernate.connection.password", password);

			StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder().applySettings(settings)
					.build();
			Metadata metadata = new MetadataSources(standardRegistry)
					.addAnnotatedClass(com.revature.ams.domain.Answers.class)
					.addAnnotatedClass(com.revature.ams.domain.Question.class)
					.addAnnotatedClass(com.revature.ams.domain.Student.class)
					.addAnnotatedClass(com.revature.ams.domain.Teacher.class)
					.addAnnotatedClass(com.revature.ams.domain.AssignmentInstance.class)
					.addAnnotatedClass(com.revature.ams.domain.AssignmentTemplate.class)
					.getMetadataBuilder()
					.applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE).build();
			sf = metadata.getSessionFactoryBuilder().build();
		}

	}

}
