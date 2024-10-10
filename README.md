# Домашнее задание к лекции «Unit-тестирование»

## Mocking

[![Build status](https://ci.appveyor.com/api/projects/status/un7i60ro9t4ibwhe?svg=true)](https://ci.appveyor.com/project/NadinDesyatova/unit-tests-mocking)

### Описание

Реализована функция, которая взаимодействует с функцией `fetchData` (устанавливает связь с удалённым веб-сервером). 
Для тестирования функции (в том числе на то, как она обрабатывает ошибки) используется механизм «mocking'а» (чтобы «отвязаться» от этой зависимости).

---