package uit.converter;

public interface BaseConverter<T, U> {
	void convertEntityToDto(T entity, U dto);
}
