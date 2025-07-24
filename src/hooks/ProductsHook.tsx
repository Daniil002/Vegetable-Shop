// Импортируем хук useState и useEffect из React
import { useState, useEffect } from "react";

// Импортируем библиотеку ky — это обёртка над fetch с удобным API
import ky from "ky";

// Импортируем тип Product (но только как тип, без лишнего мусора в бандле)
import type { Product } from "../types/product";

// Объявляем и экспортируем кастомный хук useProducts
// Этот хук загружает список продуктов и отдаёт их с флагом загрузки
export const useProducts = () => {
  // Состояние, где храним полученные продукты.
  // Изначально null — данных ещё нет.
  const [state, setState] = useState<Product[] | null>(null);

  // Состояние для отслеживания загрузки.
  // Изначально true — ведь мы ТОЛЬКО начали загрузку.
  const [isLoading, setIsLoading] = useState(true);

  // useEffect срабатывает один раз при монтировании компонента (пустой массив зависимостей [])
  useEffect(() => {
    // Объявляем асинхронную функцию, которая будет загружать данные
    const fetchData = async () => {
      try {
        // ky.get(...) делает GET-запрос по ссылке
        // .json<Product[]>() автоматически парсит JSON и приводит к типу Product[]
        const result: Product[] = await ky
          .get("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
          .json();

        // Сохраняем полученные данные в состояние
        setState(result);
      } catch (error) {
        // Если произошла ошибка при запросе — выводим её в консоль
        console.error("Fetch error:", error);
      } finally {
        // И в любом случае (успех или ошибка) — отключаем флаг загрузки
        setIsLoading(false);
      }
    };

    // Вызываем саму функцию fetchData, чтобы начать загрузку
    fetchData();
  }, []); // Пустой массив зависимостей => useEffect сработает только один раз при монтировании

  // Возвращаем объект с продуктами и флагом загрузки
  // Это будет использовать компонент, который вызовет хук
  return { products: state, isLoading };
};
