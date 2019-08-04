package com.operr.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Todo.class)
public abstract class Todo_ {

	public static volatile SingularAttribute<Todo, ZonedDateTime> updated_at;
	public static volatile SingularAttribute<Todo, String> description;
	public static volatile SingularAttribute<Todo, ZonedDateTime> created_at;
	public static volatile SingularAttribute<Todo, Long> id;
	public static volatile SingularAttribute<Todo, String> title;
	public static volatile SingularAttribute<Todo, ZonedDateTime> event_time;

	public static final String UPDATED_AT = "updated_at";
	public static final String DESCRIPTION = "description";
	public static final String CREATED_AT = "created_at";
	public static final String ID = "id";
	public static final String TITLE = "title";
	public static final String EVENT_TIME = "event_time";

}

