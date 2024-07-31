package com.etour.main.service.Category;

import com.etour.main.models.DateMaster;
import java.util.List;
import java.util.Optional;

public interface DateMasterService {
    List<DateMaster> findAll();
    Optional<DateMaster> findById(Integer id);
    DateMaster save(DateMaster dateMaster);
    DateMaster updateById(Integer id, DateMaster updatedDateMaster);
    void deleteById(Integer id);
}
