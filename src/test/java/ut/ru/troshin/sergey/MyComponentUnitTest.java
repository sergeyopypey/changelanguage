package ut.ru.troshin.sergey;

import org.junit.Test;
import ru.troshin.sergey.api.MyPluginComponent;
import ru.troshin.sergey.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}