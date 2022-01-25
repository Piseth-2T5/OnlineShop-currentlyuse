package org.pisey.IMP.Utilities;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Helper {

	private static DateFormat dateFormat;
	public static double highPrecedenceFineRate;
	public static double lowPrecedenceFineRate;

	static {
		dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		highPrecedenceFineRate = 100;
		lowPrecedenceFineRate = 50;
	}

	public static Date convertStringToDate(String date) {
		Date newDate = null;
		try {
			newDate = dateFormat.parse(date);
		} catch (ParseException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return newDate;
	}

	public static String getCurrentTime() {
		Calendar calendar = Calendar.getInstance();
		return dateFormat.format(calendar.getTime());
	}

	public static String getDueDate(String issueDate, long l) {
		Calendar calendar = Calendar.getInstance();
		try {
			calendar.setTime(dateFormat.parse(issueDate));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		calendar.add(Calendar.DATE, (int) l);
		return convertStringToDate(calendar.getTime());
	}

	private static String convertStringToDate(Date date) {
		return dateFormat.format(date);
	}
}
