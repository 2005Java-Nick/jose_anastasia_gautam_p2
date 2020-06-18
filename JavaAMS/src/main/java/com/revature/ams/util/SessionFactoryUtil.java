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
			url = "jdbc:postgresql://" + url +":"+ PORT+"/" + DB_NAME + "?";
			//System.out.println("url: "+url);
			username = System.getenv("RDS_USERNAME");
			//System.out.println("username: "+username);
			password = System.getenv("RDS_PASSWORD");
			//System.out.println("pw: "+password);
			Map<String, String> settings = new HashMap<String, String>();
			settings.put("hibernate.connection.driver_class", "org.postgresql.Driver");
			settings.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect");
			settings.put("hibernate.connection.url",url);
			settings.put("hibernate.connection.username", username);
			settings.put("hibernate.connection.password", password);
			//settings.put("hibernate.show_sql", "true");
			//settings.put("hibernate.format_sql", "true");
			//System.out.println("Hibernate Settings Map: "+settings);
			StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder().applySettings(settings)
					.build();
			//System.out.println("StandardServiceRegistry: "+standardRegistry);
			Metadata metadata = new MetadataSources(standardRegistry)
					.addAnnotatedClass(com.revature.ams.domain.Answers.class)
					.addAnnotatedClass(com.revature.ams.domain.Question.class)
					.addAnnotatedClass(com.revature.ams.domain.Student.class)
					.addAnnotatedClass(com.revature.ams.domain.Teacher.class)
					.addAnnotatedClass(com.revature.ams.domain.AssignmentInstance.class)
					.addAnnotatedClass(com.revature.ams.domain.AssignmentTemplate.class)
					.getMetadataBuilder()
					.applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE).build();
			//System.out.println("Metadata: "+metadata);
			sf = metadata.getSessionFactoryBuilder().build();
			//System.out.println("Session Factory: "+sf);
		}

	}

}
