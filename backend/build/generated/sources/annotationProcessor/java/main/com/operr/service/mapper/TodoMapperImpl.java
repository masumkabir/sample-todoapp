package com.operr.service.mapper;

import com.operr.domain.Todo;
import com.operr.service.dto.TodoDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-08-04T22:25:57+0600",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_112 (Oracle Corporation)"
)
@Component
public class TodoMapperImpl implements TodoMapper {

    @Override
    public Todo toEntity(TodoDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Todo todo = new Todo();

        todo.setId( dto.getId() );
        todo.setTitle( dto.getTitle() );
        todo.setDescription( dto.getDescription() );
        todo.setEvent_time( dto.getEvent_time() );
        todo.setCreated_at( dto.getCreated_at() );
        todo.setUpdated_at( dto.getUpdated_at() );

        return todo;
    }

    @Override
    public TodoDTO toDto(Todo entity) {
        if ( entity == null ) {
            return null;
        }

        TodoDTO todoDTO = new TodoDTO();

        todoDTO.setId( entity.getId() );
        todoDTO.setTitle( entity.getTitle() );
        todoDTO.setDescription( entity.getDescription() );
        todoDTO.setEvent_time( entity.getEvent_time() );
        todoDTO.setCreated_at( entity.getCreated_at() );
        todoDTO.setUpdated_at( entity.getUpdated_at() );

        return todoDTO;
    }

    @Override
    public List<Todo> toEntity(List<TodoDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Todo> list = new ArrayList<Todo>( dtoList.size() );
        for ( TodoDTO todoDTO : dtoList ) {
            list.add( toEntity( todoDTO ) );
        }

        return list;
    }

    @Override
    public List<TodoDTO> toDto(List<Todo> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<TodoDTO> list = new ArrayList<TodoDTO>( entityList.size() );
        for ( Todo todo : entityList ) {
            list.add( toDto( todo ) );
        }

        return list;
    }
}
